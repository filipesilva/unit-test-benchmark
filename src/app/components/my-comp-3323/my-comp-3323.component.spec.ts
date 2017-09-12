import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3323Component } from './my-comp-3323.component';

describe('MyComp3323Component', () => {
  let component: MyComp3323Component;
  let fixture: ComponentFixture<MyComp3323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
