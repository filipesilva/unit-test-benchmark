import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7075Component } from './my-comp-7075.component';

describe('MyComp7075Component', () => {
  let component: MyComp7075Component;
  let fixture: ComponentFixture<MyComp7075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
