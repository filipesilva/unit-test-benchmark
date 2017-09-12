import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4336Component } from './my-comp-4336.component';

describe('MyComp4336Component', () => {
  let component: MyComp4336Component;
  let fixture: ComponentFixture<MyComp4336Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4336Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
