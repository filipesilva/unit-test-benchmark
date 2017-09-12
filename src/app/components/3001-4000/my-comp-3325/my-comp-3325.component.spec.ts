import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3325Component } from './my-comp-3325.component';

describe('MyComp3325Component', () => {
  let component: MyComp3325Component;
  let fixture: ComponentFixture<MyComp3325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
