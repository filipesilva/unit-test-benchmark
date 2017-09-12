import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp595Component } from './my-comp-595.component';

describe('MyComp595Component', () => {
  let component: MyComp595Component;
  let fixture: ComponentFixture<MyComp595Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp595Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp595Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
