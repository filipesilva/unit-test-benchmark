import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3810Component } from './my-comp-3810.component';

describe('MyComp3810Component', () => {
  let component: MyComp3810Component;
  let fixture: ComponentFixture<MyComp3810Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3810Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3810Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
