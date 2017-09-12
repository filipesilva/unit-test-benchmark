import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3813Component } from './my-comp-3813.component';

describe('MyComp3813Component', () => {
  let component: MyComp3813Component;
  let fixture: ComponentFixture<MyComp3813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
