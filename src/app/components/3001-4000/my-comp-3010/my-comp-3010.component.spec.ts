import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3010Component } from './my-comp-3010.component';

describe('MyComp3010Component', () => {
  let component: MyComp3010Component;
  let fixture: ComponentFixture<MyComp3010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
