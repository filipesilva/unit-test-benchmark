import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7703Component } from './my-comp-7703.component';

describe('MyComp7703Component', () => {
  let component: MyComp7703Component;
  let fixture: ComponentFixture<MyComp7703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
