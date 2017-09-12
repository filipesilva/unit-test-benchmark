import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3689Component } from './my-comp-3689.component';

describe('MyComp3689Component', () => {
  let component: MyComp3689Component;
  let fixture: ComponentFixture<MyComp3689Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3689Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
