import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp666Component } from './my-comp-666.component';

describe('MyComp666Component', () => {
  let component: MyComp666Component;
  let fixture: ComponentFixture<MyComp666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
