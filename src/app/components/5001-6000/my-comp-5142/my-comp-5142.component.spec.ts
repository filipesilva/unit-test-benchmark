import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5142Component } from './my-comp-5142.component';

describe('MyComp5142Component', () => {
  let component: MyComp5142Component;
  let fixture: ComponentFixture<MyComp5142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
