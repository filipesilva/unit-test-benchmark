import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3601Component } from './my-comp-3601.component';

describe('MyComp3601Component', () => {
  let component: MyComp3601Component;
  let fixture: ComponentFixture<MyComp3601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
