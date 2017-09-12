import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3048Component } from './my-comp-3048.component';

describe('MyComp3048Component', () => {
  let component: MyComp3048Component;
  let fixture: ComponentFixture<MyComp3048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
