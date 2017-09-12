import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3721Component } from './my-comp-3721.component';

describe('MyComp3721Component', () => {
  let component: MyComp3721Component;
  let fixture: ComponentFixture<MyComp3721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
