import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5218Component } from './my-comp-5218.component';

describe('MyComp5218Component', () => {
  let component: MyComp5218Component;
  let fixture: ComponentFixture<MyComp5218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
