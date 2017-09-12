import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4628Component } from './my-comp-4628.component';

describe('MyComp4628Component', () => {
  let component: MyComp4628Component;
  let fixture: ComponentFixture<MyComp4628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
