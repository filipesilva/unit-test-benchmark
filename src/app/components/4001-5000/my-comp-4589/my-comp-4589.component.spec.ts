import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4589Component } from './my-comp-4589.component';

describe('MyComp4589Component', () => {
  let component: MyComp4589Component;
  let fixture: ComponentFixture<MyComp4589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
