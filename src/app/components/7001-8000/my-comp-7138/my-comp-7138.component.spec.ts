import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7138Component } from './my-comp-7138.component';

describe('MyComp7138Component', () => {
  let component: MyComp7138Component;
  let fixture: ComponentFixture<MyComp7138Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7138Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7138Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
