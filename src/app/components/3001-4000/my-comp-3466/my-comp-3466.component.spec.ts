import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3466Component } from './my-comp-3466.component';

describe('MyComp3466Component', () => {
  let component: MyComp3466Component;
  let fixture: ComponentFixture<MyComp3466Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3466Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3466Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
