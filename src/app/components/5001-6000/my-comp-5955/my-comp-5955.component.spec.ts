import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5955Component } from './my-comp-5955.component';

describe('MyComp5955Component', () => {
  let component: MyComp5955Component;
  let fixture: ComponentFixture<MyComp5955Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5955Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5955Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
