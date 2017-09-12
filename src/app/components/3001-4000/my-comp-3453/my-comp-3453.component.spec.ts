import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3453Component } from './my-comp-3453.component';

describe('MyComp3453Component', () => {
  let component: MyComp3453Component;
  let fixture: ComponentFixture<MyComp3453Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3453Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3453Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
