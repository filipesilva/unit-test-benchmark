import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7793Component } from './my-comp-7793.component';

describe('MyComp7793Component', () => {
  let component: MyComp7793Component;
  let fixture: ComponentFixture<MyComp7793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
