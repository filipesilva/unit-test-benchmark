import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4462Component } from './my-comp-4462.component';

describe('MyComp4462Component', () => {
  let component: MyComp4462Component;
  let fixture: ComponentFixture<MyComp4462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
