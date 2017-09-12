import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3110Component } from './my-comp-3110.component';

describe('MyComp3110Component', () => {
  let component: MyComp3110Component;
  let fixture: ComponentFixture<MyComp3110Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3110Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3110Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
