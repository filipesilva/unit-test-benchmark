import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3094Component } from './my-comp-3094.component';

describe('MyComp3094Component', () => {
  let component: MyComp3094Component;
  let fixture: ComponentFixture<MyComp3094Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3094Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
