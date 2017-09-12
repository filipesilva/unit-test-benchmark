import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3460Component } from './my-comp-3460.component';

describe('MyComp3460Component', () => {
  let component: MyComp3460Component;
  let fixture: ComponentFixture<MyComp3460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
