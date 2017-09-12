import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5334Component } from './my-comp-5334.component';

describe('MyComp5334Component', () => {
  let component: MyComp5334Component;
  let fixture: ComponentFixture<MyComp5334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
