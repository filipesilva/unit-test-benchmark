import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7856Component } from './my-comp-7856.component';

describe('MyComp7856Component', () => {
  let component: MyComp7856Component;
  let fixture: ComponentFixture<MyComp7856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
