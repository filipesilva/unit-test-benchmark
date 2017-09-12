import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp683Component } from './my-comp-683.component';

describe('MyComp683Component', () => {
  let component: MyComp683Component;
  let fixture: ComponentFixture<MyComp683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
