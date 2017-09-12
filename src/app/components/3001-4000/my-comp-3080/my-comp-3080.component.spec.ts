import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3080Component } from './my-comp-3080.component';

describe('MyComp3080Component', () => {
  let component: MyComp3080Component;
  let fixture: ComponentFixture<MyComp3080Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3080Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
