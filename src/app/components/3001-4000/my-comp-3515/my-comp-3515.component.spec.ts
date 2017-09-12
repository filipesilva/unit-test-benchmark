import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3515Component } from './my-comp-3515.component';

describe('MyComp3515Component', () => {
  let component: MyComp3515Component;
  let fixture: ComponentFixture<MyComp3515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
