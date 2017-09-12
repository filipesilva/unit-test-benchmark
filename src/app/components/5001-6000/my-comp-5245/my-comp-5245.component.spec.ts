import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5245Component } from './my-comp-5245.component';

describe('MyComp5245Component', () => {
  let component: MyComp5245Component;
  let fixture: ComponentFixture<MyComp5245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
