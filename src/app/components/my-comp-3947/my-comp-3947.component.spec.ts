import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3947Component } from './my-comp-3947.component';

describe('MyComp3947Component', () => {
  let component: MyComp3947Component;
  let fixture: ComponentFixture<MyComp3947Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3947Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3947Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
