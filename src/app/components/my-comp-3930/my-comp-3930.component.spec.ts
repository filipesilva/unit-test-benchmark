import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3930Component } from './my-comp-3930.component';

describe('MyComp3930Component', () => {
  let component: MyComp3930Component;
  let fixture: ComponentFixture<MyComp3930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
