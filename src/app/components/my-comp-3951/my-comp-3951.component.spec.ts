import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3951Component } from './my-comp-3951.component';

describe('MyComp3951Component', () => {
  let component: MyComp3951Component;
  let fixture: ComponentFixture<MyComp3951Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3951Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
