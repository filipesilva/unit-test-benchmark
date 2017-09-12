import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7428Component } from './my-comp-7428.component';

describe('MyComp7428Component', () => {
  let component: MyComp7428Component;
  let fixture: ComponentFixture<MyComp7428Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7428Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7428Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
