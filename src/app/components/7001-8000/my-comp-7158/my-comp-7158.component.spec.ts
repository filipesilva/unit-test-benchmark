import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7158Component } from './my-comp-7158.component';

describe('MyComp7158Component', () => {
  let component: MyComp7158Component;
  let fixture: ComponentFixture<MyComp7158Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7158Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7158Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
