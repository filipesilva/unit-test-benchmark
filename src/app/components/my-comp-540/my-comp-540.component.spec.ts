import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp540Component } from './my-comp-540.component';

describe('MyComp540Component', () => {
  let component: MyComp540Component;
  let fixture: ComponentFixture<MyComp540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
