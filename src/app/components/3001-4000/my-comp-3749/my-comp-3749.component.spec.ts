import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3749Component } from './my-comp-3749.component';

describe('MyComp3749Component', () => {
  let component: MyComp3749Component;
  let fixture: ComponentFixture<MyComp3749Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3749Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
