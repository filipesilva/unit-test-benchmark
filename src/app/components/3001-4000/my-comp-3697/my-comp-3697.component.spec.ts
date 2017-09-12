import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3697Component } from './my-comp-3697.component';

describe('MyComp3697Component', () => {
  let component: MyComp3697Component;
  let fixture: ComponentFixture<MyComp3697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
