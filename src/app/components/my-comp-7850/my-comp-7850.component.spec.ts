import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7850Component } from './my-comp-7850.component';

describe('MyComp7850Component', () => {
  let component: MyComp7850Component;
  let fixture: ComponentFixture<MyComp7850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
