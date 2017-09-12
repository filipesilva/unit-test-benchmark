import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5323Component } from './my-comp-5323.component';

describe('MyComp5323Component', () => {
  let component: MyComp5323Component;
  let fixture: ComponentFixture<MyComp5323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
