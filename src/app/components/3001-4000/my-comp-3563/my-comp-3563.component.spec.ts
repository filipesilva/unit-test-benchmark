import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3563Component } from './my-comp-3563.component';

describe('MyComp3563Component', () => {
  let component: MyComp3563Component;
  let fixture: ComponentFixture<MyComp3563Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3563Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3563Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
