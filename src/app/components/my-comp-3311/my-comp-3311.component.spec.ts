import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3311Component } from './my-comp-3311.component';

describe('MyComp3311Component', () => {
  let component: MyComp3311Component;
  let fixture: ComponentFixture<MyComp3311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
