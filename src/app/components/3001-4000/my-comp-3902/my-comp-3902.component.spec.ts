import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3902Component } from './my-comp-3902.component';

describe('MyComp3902Component', () => {
  let component: MyComp3902Component;
  let fixture: ComponentFixture<MyComp3902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
