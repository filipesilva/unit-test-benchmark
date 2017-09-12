import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4856Component } from './my-comp-4856.component';

describe('MyComp4856Component', () => {
  let component: MyComp4856Component;
  let fixture: ComponentFixture<MyComp4856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
