import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp851Component } from './my-comp-851.component';

describe('MyComp851Component', () => {
  let component: MyComp851Component;
  let fixture: ComponentFixture<MyComp851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
