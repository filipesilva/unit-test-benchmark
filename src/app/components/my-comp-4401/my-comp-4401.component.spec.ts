import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4401Component } from './my-comp-4401.component';

describe('MyComp4401Component', () => {
  let component: MyComp4401Component;
  let fixture: ComponentFixture<MyComp4401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
