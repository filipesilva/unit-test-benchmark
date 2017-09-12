import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7144Component } from './my-comp-7144.component';

describe('MyComp7144Component', () => {
  let component: MyComp7144Component;
  let fixture: ComponentFixture<MyComp7144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
