import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7786Component } from './my-comp-7786.component';

describe('MyComp7786Component', () => {
  let component: MyComp7786Component;
  let fixture: ComponentFixture<MyComp7786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
