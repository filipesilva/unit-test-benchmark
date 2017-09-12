import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4373Component } from './my-comp-4373.component';

describe('MyComp4373Component', () => {
  let component: MyComp4373Component;
  let fixture: ComponentFixture<MyComp4373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
