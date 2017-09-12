import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3027Component } from './my-comp-3027.component';

describe('MyComp3027Component', () => {
  let component: MyComp3027Component;
  let fixture: ComponentFixture<MyComp3027Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3027Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3027Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
